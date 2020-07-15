import React, { Component } from "react";
import Heading from "./Heading/Heading";
import Bio from "./Bio/Bio";
import EditForm from "./EditForm/EditForm";
import "./App.css";

export default class App extends Component {
  state = {
    firstName: "John",
    lastName: "Doe",
    bio:
      "Aenean sed luctus nibh. Ut ornare non erat eu facilisis. Curabitur molestie, eros in vulputate efficitur, leo lorem rhoncus risus, quis pulvinar arcu magna et massa. Proin sagittis risus ut rutrum elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla lacus risus, euismod sed tortor at, molestie sagittis magna. Suspendisse aliquet velit eu nisl sodales, vitae cursus tortor accumsan. Vestibulum nec neque mi. Duis eleifend iaculis massa, sit amet auctor turpis consequat a. Ut at leo purus. Mauris lorem arcu, lacinia et volutpat vitae, semper non tellus. Ut porta augue vel lacus dapibus, a consequat nunc porta. Nullam volutpat mauris et quam pellentesque, vitae blandit felis dictum. Nulla facilisi. Donec hendrerit dui ut enim condimentum varius. Nunc malesuada laoreet augue nec bibendum. Duis porttitor neque rutrum eleifend ornare. Aliquam condimentum felis tellus, sed consectetur neque vestibulum eu. Nullam vel pharetra sem. Mauris feugiat rhoncus dolor. Morbi blandit, ipsum a consequat viverra, risus massa ultricies velit, nec elementum quam leo a nibh. Vestibulum eros nisi, rutrum aliquam arcu at, porttitor viverra libero. Duis ac neque eu dolor bibendum sagittis non eu ex. Suspendisse sapien neque, aliquet in varius sit amet, vulputate sed mauris. Proin vel mi elementum, posuere dui consectetur, dignissim urna. In vitae massa sed justo ultricies facilisis. Nam quis venenatis lorem. In malesuada lectus eu mattis gravida. Integer porta lectus tortor, non condimentum purus tempus eleifend. Ut lobortis finibus magna iaculis feugiat. In vel felis lorem. In dui enim, aliquam vitae fringilla eget, venenatis et magna. Praesent dictum odio nisi, in auctor turpis pulvinar nec. Integer iaculis id metus sollicitudin vehicula. Donec bibendum lacus vel luctus varius. Curabitur vehicula dignissim massa, in fermentum sapien mattis ut. Duis rhoncus porttitor tellus, eu iaculis elit interdum et. Integer at massa neque. Etiam ut tincidunt leo, id efficitur massa. Praesent diam est, tempus at luctus id, molestie vel dui.",
    edit: null,
  };
  render() {
    return (
      <div style={{ postition: "relative" }}>
        {this.state.edit ? (
          <EditForm submit={this.submit} {...this.state} />
        ) : null}
        <div className={`mainPage ${this.state.edit && "blur"}`}>
          <div onClick={() => this.setState({ edit: "details" })}>
            <Heading {...this.state} />
          </div>
          <div onClick={() => this.setState({ edit: "bio" })}>
            <Bio {...this.state} />
          </div>
        </div>
      </div>
    );
  }
  submit = (e) => {
    this.setState({ ...e, edit: null });
  };
}
