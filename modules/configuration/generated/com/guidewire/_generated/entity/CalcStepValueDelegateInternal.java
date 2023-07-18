package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CalcStepValueDelegate.eti;CalcStepValueDelegate.eix;CalcStepValueDelegate.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface CalcStepValueDelegateInternal extends com.guidewire.pl.domain.persistence.core.impl.BeanInternal, com.guidewire.pc.domain.rating.flow.CalcStepValueDelegateAdapter {
  /**
   * Gets the value of the ConstantValue field.
   * Represents constant value 
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getConstantValue();
  
  
  /**
   * Gets the value of the CovTermCode field.
   * Cov term pattern code if value represents a cov term.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCovTermCode();
  
  
  /**
   * Gets the value of the InScopeParam field.
   * The rate routine param that forms the first part of the in scope value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.CalcRoutineParamName getInScopeParam();
  
  
  /**
   * Gets the value of the InScopeValue field.
   * A gosu expression ('dot path') that describes how to access the desired value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getInScopeValue();
  
  
  /**
   * Gets the value of the InScopeValueType field.
   * The desired data type for an in-scope value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getInScopeValueType();
  
  
  /**
   * Gets the value of the OperandType field.
   * Type of operand
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.CalcStepOperandType getOperandType();
  
  
  /**
   * Gets the value of the VariableFieldName field.
   * Used to denote field selection for a complex variable
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getVariableFieldName();
  
  
  /**
   * Gets the value of the VariableName field.
   * Local Variable Name
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getVariableName();
  
  
  /**
   * Gets the value of the InScopeValueIsModifier field.
   * A flag to indicate if the in scope value is a modifier
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isInScopeValueIsModifier();
  
  
  /**
   * Sets the value of the ConstantValue field.
   */
  public void setConstantValue(java.lang.String value);
  
  
  /**
   * Sets the value of the CovTermCode field.
   */
  public void setCovTermCode(java.lang.String value);
  
  
  /**
   * Sets the value of the InScopeParam field.
   */
  public void setInScopeParam(typekey.CalcRoutineParamName value);
  
  
  /**
   * Sets the value of the InScopeValue field.
   */
  public void setInScopeValue(java.lang.String value);
  
  
  /**
   * Sets the value of the InScopeValueIsModifier field.
   */
  public void setInScopeValueIsModifier(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the InScopeValueType field.
   */
  public void setInScopeValueType(java.lang.String value);
  
  
  /**
   * Sets the value of the OperandType field.
   */
  public void setOperandType(typekey.CalcStepOperandType value);
  
  
  /**
   * Sets the value of the VariableFieldName field.
   */
  public void setVariableFieldName(java.lang.String value);
  
  
  /**
   * Sets the value of the VariableName field.
   */
  public void setVariableName(java.lang.String value);
  
  
  
}