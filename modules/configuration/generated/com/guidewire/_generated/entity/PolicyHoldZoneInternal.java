package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyHoldZone.eti;PolicyHoldZone.eix;PolicyHoldZone.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PolicyHoldZoneInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire.pc.domain.policyhold.impl.PolicyHoldZoneInternalMethods {
  /**
   * Gets the value of the Code field.
   * The code for this zone, this is the value that should be used for lookups.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCode();
  
  
  /**
   * Gets the value of the CodeDenorm field.
   * denorm field for Code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCodeDenorm();
  
  
  /**
   * Gets the value of the Country field.
   * The country to which the zone belongs.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Country getCountry();
  
  
  /**
   * Gets the value of the PolicyHold field.
   * The policy hold containing this zone.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyHold getPolicyHold();
  
  
  public gw.pl.persistence.core.Key getPolicyHoldID();
  
  
  /**
   * Gets the value of the ZoneType field.
   * Type of zone.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ZoneType getZoneType();
  
  
  /**
   * Sets the value of the Code field.
   */
  public void setCode(java.lang.String value);
  
  
  /**
   * Sets the value of the CodeDenorm field.
   */
  public void setCodeDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the Country field.
   */
  public void setCountry(typekey.Country value);
  
  
  /**
   * Sets the value of the PolicyHold field.
   */
  public void setPolicyHold(entity.PolicyHold value);
  
  
  public void setPolicyHoldID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ZoneType field.
   */
  public void setZoneType(typekey.ZoneType value);
  
  
  
}