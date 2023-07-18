package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RateBookCalcRoutine.eti;RateBookCalcRoutine.eix;RateBookCalcRoutine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RateBookCalcRoutineInternal extends com.guidewire._generated.entity.VersionableInternal {
  /**
   * Gets the value of the CalcRoutineDefinition field.
   * The CalcRoutineDefinition.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CalcRoutineDefinition getCalcRoutineDefinition();
  
  
  public gw.pl.persistence.core.Key getCalcRoutineDefinitionID();
  
  
  /**
   * Gets the value of the RateBook field.
   * The associated RateBook.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateBook getRateBook();
  
  
  public gw.pl.persistence.core.Key getRateBookID();
  
  
  /**
   * Sets the value of the CalcRoutineDefinition field.
   */
  public void setCalcRoutineDefinition(entity.CalcRoutineDefinition value);
  
  
  public void setCalcRoutineDefinitionID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the RateBook field.
   */
  public void setRateBook(entity.RateBook value);
  
  
  public void setRateBookID(gw.pl.persistence.core.Key value);
  
  
  
}