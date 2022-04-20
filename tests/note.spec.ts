import 'mocha';
import {expect} from 'chai';
import {Note} from '../src/note';

const test: Note = new Note('Test', 'This is a test', 'red');
describe('Class Note tests', () => {
  it('Note getTitle() return Test', () => {
    expect(test.getTitle()).to.be.equal('Test');
  }),
  it('Note getBody() return This is a test', () => {
    expect(test.getBody()).to.be.equal('This is a test');
  }),
  it('Note getColour() return red', () => {
    expect(test.getColour()).to.be.equal('red');
  });
});

const test1: Note = new Note('Test1', 'This is the test1', 'yellow');
describe('Class Note tests', () => {
  it('Note1 getTitle() return Test1', () => {
    expect(test1.getTitle()).to.be.equal('Test1');
  }),
  it('Note1 getBody() return This is the test1', () => {
    expect(test1.getBody()).to.be.equal('This is the test1');
  }),
  it('Note1 getColour() return yellow', () => {
    expect(test1.getColour()).to.be.equal('yellow');
  });
});
