package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "DiagRateflowParamRef.eti;DiagRateflowParamRef.eix;DiagRateflowParamRef.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface DiagRateflowParamRefInternal extends com.guidewire._generated.entity.DiagRatingWorksheetRefInternal {
  /**
   * Gets the value of the CalcRoutineParameter field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CalcRoutineParameter getCalcRoutineParameter();
  
  
  public gw.pl.persistence.core.Key getCalcRoutineParameterID();
  
  
  /**
   * Gets the value of the StringValue field.
   * string value of non-bean parameters
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStringValue();
  
  
  /**
   * Sets the value of the CalcRoutineParameter field.
   */
  public void setCalcRoutineParameter(entity.CalcRoutineParameter value);
  
  
  public void setCalcRoutineParameterID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the StringValue field.
   */
  public void setStringValue(java.lang.String value);
  
  
  
}