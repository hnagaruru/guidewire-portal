package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellAddlInterest.eti;HOPDwellAddlInterest.eix;HOPDwellAddlInterest.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface HOPDwellAddlInterestInternal extends com.guidewire._generated.entity.AddlInterestDetailInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.account.Mergeable, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Gets the value of the AddlIntEffDate field.
   * Effective date for additional interest
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getAddlIntEffDate();
  
  
  /**
   * Gets the value of the AddlIntExpDate field.
   * Expiration date for additional interest
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getAddlIntExpDate();
  
  
  /**
   * Gets the value of the Description field.
   * Description of additional interest
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the HOPDwelling field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwelling getHOPDwelling();
  
  
  public gw.pl.persistence.core.Key getHOPDwellingID();
  
  
  /**
   * Sets the value of the AddlIntEffDate field.
   */
  public void setAddlIntEffDate(java.util.Date value);
  
  
  /**
   * Sets the value of the AddlIntExpDate field.
   */
  public void setAddlIntExpDate(java.util.Date value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the HOPDwelling field.
   */
  public void setHOPDwelling(entity.HOPDwelling value);
  
  
  public void setHOPDwellingID(gw.pl.persistence.core.Key value);
  
  
  
}