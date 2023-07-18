package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CalcRoutineParameter.eti;CalcRoutineParameter.eix;CalcRoutineParameter.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface CalcRoutineParameterInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the CalcRoutineParameterSet field.
   * The calculation routine parameter set
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CalcRoutineParameterSet getCalcRoutineParameterSet();
  
  
  public gw.pl.persistence.core.Key getCalcRoutineParameterSetID();
  
  
  /**
   * Gets the value of the Code field.
   * The code associated with the parameter
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.CalcRoutineParamName getCode();
  
  
  /**
   * Gets the value of the CoveragePattern field.
   * If param is a coverage, this is the Pattern code otherwise it should be null
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCoveragePattern();
  
  
  /**
   * Gets the value of the ParamType field.
   * Type of this parameter
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getParamType();
  
  
  /**
   * Gets the value of the WrapperClass field.
   * If UseWrapper is true, this will contain the name of the class used as a wrapper
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getWrapperClass();
  
  
  /**
   * Gets the value of the UseWrapper field.
   * If true CalcRoutine will attemt to apply a wrapper to this parameter
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isUseWrapper();
  
  
  /**
   * Gets the value of the Writable field.
   * True if this parameter should be exposed as writable in rate routines
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isWritable();
  
  
  /**
   * Sets the value of the CalcRoutineParameterSet field.
   */
  public void setCalcRoutineParameterSet(entity.CalcRoutineParameterSet value);
  
  
  public void setCalcRoutineParameterSetID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Code field.
   */
  public void setCode(typekey.CalcRoutineParamName value);
  
  
  /**
   * Sets the value of the CoveragePattern field.
   */
  public void setCoveragePattern(java.lang.String value);
  
  
  /**
   * Sets the value of the ParamType field.
   */
  public void setParamType(java.lang.String value);
  
  
  /**
   * Sets the value of the UseWrapper field.
   */
  public void setUseWrapper(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the WrapperClass field.
   */
  public void setWrapperClass(java.lang.String value);
  
  
  /**
   * Sets the value of the Writable field.
   */
  public void setWritable(java.lang.Boolean value);
  
  
  
}