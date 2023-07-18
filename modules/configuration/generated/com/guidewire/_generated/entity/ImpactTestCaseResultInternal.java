package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ImpactTestCaseResult.eti;ImpactTestCaseResult.eix;ImpactTestCaseResult.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ImpactTestCaseResultInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the CompletionPercentage field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getCompletionPercentage();
  
  
  /**
   * Gets the value of the Data field.
   * Impact test result data
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.lang.Blob getData();
  
  
  /**
   * Gets the value of the Complete field.
   * Complete flag
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isComplete();
  
  
  /**
   * Sets the value of the Complete field.
   */
  public void setComplete(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the CompletionPercentage field.
   */
  public void setCompletionPercentage(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Data field.
   */
  public void setData(gw.lang.Blob value);
  
  
  
}