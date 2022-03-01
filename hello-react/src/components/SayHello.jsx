import Button from './Button'
import './sayHello.css'

export default function SayHello(){
  return (
    <div className="sayHello">
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library and become
          a super Ninja developer.
        </p>
        <Button /> 
    </div>)
}