package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDDropdownValue.eti;APDDropdownValue.eix;APDDropdownValue.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDDropdownValueInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the DecimalValue field.
   * The value if a number
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getDecimalValue();
  
  
  /**
   * Gets the value of the Dropdown field.
   * The dropdown entry for which this is the value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDDropdownEntry getDropdown();
  
  
  /**
   * Gets the value of the DropdownColumn field.
   * The column to which the value belongs within the entry
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDDropdownColumn getDropdownColumn();
  
  
  public gw.pl.persistence.core.Key getDropdownColumnID();
  
  
  public gw.pl.persistence.core.Key getDropdownID();
  
  
  /**
   * Gets the value of the IntegerValue field.
   * The value if an integer
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getIntegerValue();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDDropdownValue getSubtype();
  
  
  /**
   * Sets the value of the DecimalValue field.
   */
  public void setDecimalValue(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the Dropdown field.
   */
  public void setDropdown(entity.APDDropdownEntry value);
  
  
  /**
   * Sets the value of the DropdownColumn field.
   */
  public void setDropdownColumn(entity.APDDropdownColumn value);
  
  
  public void setDropdownColumnID(gw.pl.persistence.core.Key value);
  
  
  public void setDropdownID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the IntegerValue field.
   */
  public void setIntegerValue(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.APDDropdownValue value);
  
  
  
}