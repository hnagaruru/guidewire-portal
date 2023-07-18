package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CalcStepDefinitionArgument.eti;CalcStepDefinitionArgument.eix;CalcStepDefinitionArgument.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface CalcStepDefinitionArgumentInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.CalcStepValueDelegateInternal, com.guidewire.pc.domain.rating.flow.CalcStepValueDelegateAdapter {
  /**
   * Gets the value of the Operand field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CalcStepDefinitionOperand getOperand();
  
  
  public gw.pl.persistence.core.Key getOperandID();
  
  
  /**
   * Gets the value of the Parameter field.
   * The value of this argument
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getParameter();
  
  
  /**
   * Gets the value of the ParameterType field.
   * The type of this argument
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getParameterType();
  
  
  /**
   * Gets the value of the OverrideSource field.
   * If true, take argument source from here instead of rate table definition.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isOverrideSource();
  
  
  /**
   * Sets the value of the Operand field.
   */
  public void setOperand(entity.CalcStepDefinitionOperand value);
  
  
  public void setOperandID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the OverrideSource field.
   */
  public void setOverrideSource(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Parameter field.
   */
  public void setParameter(java.lang.String value);
  
  
  /**
   * Sets the value of the ParameterType field.
   */
  public void setParameterType(java.lang.String value);
  
  
  
}