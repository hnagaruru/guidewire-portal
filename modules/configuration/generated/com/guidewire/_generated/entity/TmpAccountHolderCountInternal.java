package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TmpAccountHolderCount.eti;TmpAccountHolderCount.eix;TmpAccountHolderCount.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface TmpAccountHolderCountInternal extends com.guidewire.pl.domain.persistence.core.impl.BeanInternal {
  /**
   * Gets the value of the ActualValue field.
   * Number of Accounts on which this Contact is the AccountHolder
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getActualValue();
  
  
  /**
   * Gets the value of the CurrentValue field.
   * Current (possibly incorrect) value of AccountHolderCount, denormed from Contact
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getCurrentValue();
  
  
  /**
   * Gets the value of the ID field.
   * Contact ID
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getID();
  
  
  /**
   * Sets the value of the ActualValue field.
   */
  public void setActualValue(java.lang.Integer value);
  
  
  /**
   * Sets the value of the CurrentValue field.
   */
  public void setCurrentValue(java.lang.Integer value);
  
  
  /**
   * Sets the value of the ID field.
   */
  public void setID(java.lang.Long value);
  
  
  
}