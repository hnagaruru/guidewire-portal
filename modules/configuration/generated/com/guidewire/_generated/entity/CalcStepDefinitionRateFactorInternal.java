package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CalcStepDefinitionRateFactor.eti;CalcStepDefinitionRateFactor.eix;CalcStepDefinitionRateFactor.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface CalcStepDefinitionRateFactorInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the ColumnName field.
   * Rate factor column name
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getColumnName();
  
  
  /**
   * Gets the value of the Operand field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CalcStepDefinitionOperand getOperand();
  
  
  public gw.pl.persistence.core.Key getOperandID();
  
  
  /**
   * Sets the value of the ColumnName field.
   */
  public void setColumnName(java.lang.String value);
  
  
  /**
   * Sets the value of the Operand field.
   */
  public void setOperand(entity.CalcStepDefinitionOperand value);
  
  
  public void setOperandID(gw.pl.persistence.core.Key value);
  
  
  
}