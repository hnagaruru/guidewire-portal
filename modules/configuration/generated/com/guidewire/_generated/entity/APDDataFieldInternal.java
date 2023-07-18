package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDDataField.eti;APDDataField.eix;APDDataField.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDDataFieldInternal extends com.guidewire._generated.entity.EffDatedInternal {
  /**
   * Gets the value of the Attribute field.
   * The definition of the information captured in this field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDAttribute getAttribute();
  
  
  public gw.pl.persistence.core.Key getAttributeID();
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDDataField getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the CodeValue field.
   * The drop down list entry if this field is a drop down
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDDropdownEntry getCodeValue();
  
  
  public gw.pl.persistence.core.Key getCodeValueID();
  
  
  /**
   * Gets the value of the DateValue field.
   * The value if a date/time
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateValue();
  
  
  /**
   * Gets the value of the DecimalValue field.
   * The value if a number
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getDecimalValue();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDDataField getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the IntegerValue field.
   * The value if an integer
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getIntegerValue();
  
  
  /**
   * Gets the value of the Location field.
   * The value if it is a location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLocation getLocation();
  
  
  public gw.pl.persistence.core.Key getLocationID();
  
  
  /**
   * Gets the value of the Party field.
   * The value if it is a party
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyContactRole getParty();
  
  
  public gw.pl.persistence.core.Key getPartyID();
  
  
  /**
   * Gets the value of the ScalableDecimalValue field.
   * The value if a scalable number
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getScalableDecimalValue();
  
  
  /**
   * Gets the value of the ScalableIntegerValue field.
   * The value if a scalable integer
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getScalableIntegerValue();
  
  
  /**
   * Gets the value of the StringValue field.
   * The value if text or a drop down entry
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStringValue();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDDataField getSubtype();
  
  
  /**
   * Gets the value of the BitValue field.
   * The value if a true/false
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBitValue();
  
  
  /**
   * Sets the value of the Attribute field.
   */
  public void setAttribute(entity.APDAttribute value);
  
  
  public void setAttributeID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.APDDataField value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BitValue field.
   */
  public void setBitValue(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the CodeValue field.
   */
  public void setCodeValue(entity.APDDropdownEntry value);
  
  
  public void setCodeValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the DateValue field.
   */
  public void setDateValue(java.util.Date value);
  
  
  /**
   * Sets the value of the DecimalValue field.
   */
  public void setDecimalValue(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.APDDataField value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the IntegerValue field.
   */
  public void setIntegerValue(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Location field.
   */
  public void setLocation(entity.PolicyLocation value);
  
  
  public void setLocationID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Party field.
   */
  public void setParty(entity.PolicyContactRole value);
  
  
  public void setPartyID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ScalableDecimalValue field.
   */
  public void setScalableDecimalValue(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the ScalableIntegerValue field.
   */
  public void setScalableIntegerValue(java.lang.Integer value);
  
  
  /**
   * Sets the value of the StringValue field.
   */
  public void setStringValue(java.lang.String value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.APDDataField value);
  
  
  
}