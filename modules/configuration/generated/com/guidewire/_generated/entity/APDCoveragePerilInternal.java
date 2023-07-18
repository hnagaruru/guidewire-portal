package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDCoveragePeril.eti;APDCoveragePeril.eix;APDCoveragePeril.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDCoveragePerilInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the Coverage field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCoverage getCoverage();
  
  
  public gw.pl.persistence.core.Key getCoverageID();
  
  
  /**
   * Gets the value of the Deductible field.
   * The fixed amount to be used as the deductible
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getDeductible();
  
  
  /**
   * Gets the value of the DeductibleAttribute field.
   * The attribute that holds the deductible for this peril
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDAttribute getDeductibleAttribute();
  
  
  public gw.pl.persistence.core.Key getDeductibleAttributeID();
  
  
  /**
   * Gets the value of the LimitAttribute field.
   * The attribute that holds the limit for this peril
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDAttribute getLimitAttribute();
  
  
  public gw.pl.persistence.core.Key getLimitAttributeID();
  
  
  /**
   * Gets the value of the Peril field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDPeril getPeril();
  
  
  public gw.pl.persistence.core.Key getPerilID();
  
  
  /**
   * Gets the value of the PerilLimit field.
   * The fixed amount to be used as the limit
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getPerilLimit();
  
  
  /**
   * Sets the value of the Coverage field.
   */
  public void setCoverage(entity.APDCoverage value);
  
  
  public void setCoverageID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Deductible field.
   */
  public void setDeductible(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the DeductibleAttribute field.
   */
  public void setDeductibleAttribute(entity.APDAttribute value);
  
  
  public void setDeductibleAttributeID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the LimitAttribute field.
   */
  public void setLimitAttribute(entity.APDAttribute value);
  
  
  public void setLimitAttributeID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Peril field.
   */
  public void setPeril(entity.APDPeril value);
  
  
  public void setPerilID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PerilLimit field.
   */
  public void setPerilLimit(java.math.BigDecimal value);
  
  
  
}