import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl, Form, ValidatorFn } from '@angular/forms';
import { AuthService } from 'src/app/user/auth.service';
import { ISession } from '../ISession';

@Component({
    selector: 'create-session',
    templateUrl: 'create-session.component.html'
})

export class CreateSessionComponent implements OnInit {

    @Output() cancel = new EventEmitter();

    @Output() save = new EventEmitter<ISession>();

    session: FormGroup;

    name: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl;

    ngOnInit() {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), this.restrictedWords(['foo', 'bar', 'bass'])]);

        this.session = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        });
    }

    private restrictedWords(restrictedWords: string[]): ValidatorFn  {
        return (control: FormControl): {[key: string]: any} => {
            if(!restrictedWords) {
                return null;
            }

            const invalidWords = restrictedWords.map(word => control.value.includes(word)? word : null)
                                                .filter(word => word != null);
            return invalidWords && invalidWords.length > 0
                ? {'restrictedWords': invalidWords.join(', ')}
                : null;
        }
    };

    saveSession(formValues): void {
        console.log(this.session.value);
        console.log(formValues);

        this.save.emit(formValues);
    }

    onCancel(): void {
        this.cancel.emit();
    }
}