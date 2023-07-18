package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyDriver.eti;PolicyDriver.eix;PolicyDriver.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PolicyDriverInternal extends com.guidewire._generated.entity.PAPolicyContactRoleInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.account.AccountSyncable, gw.api.domain.account.Mergeable, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the PolicyDriverMVRArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPolicyDriverMVRArray(entity.PolicyDriverMVR element);
  
  
  /**
   * Adds the given element to the VehicleDrivers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToVehicleDrivers(entity.VehicleDriver element);
  
  
  /**
   * Gets the value of the LicenseNumberInternal field.
   * Driver's license number.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLicenseNumberInternal();
  
  
  /**
   * Gets the value of the LicenseStateInternal field.
   * Driver's license jurisdiction.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getLicenseStateInternal();
  
  
  /**
   * Gets the value of the NumberOfAccidents field.
   * Number of accidents updated by the Agent
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.NumberOfAccidents getNumberOfAccidents();
  
  
  /**
   * Gets the value of the NumberOfViolations field.
   * Number of violations updated by the Agent
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.NumberOfAccidents getNumberOfViolations();
  
  
  /**
   * Gets the value of the PolicyDriverMVR field.
   * The MVR summary data for this driver
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyDriverMVR getPolicyDriverMVR();
  
  
  /**
   * Gets the value of the PolicyDriverMVRArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyDriverMVR[] getPolicyDriverMVRArray();
  
  
  public gw.pl.persistence.core.Key getPolicyDriverMVRID();
  
  
  /**
   * Gets the value of the QuickQuoteNumber field.
   * The driver number for quick quote
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getQuickQuoteNumber();
  
  
  /**
   * Gets the value of the VehicleDrivers field.
   * The Vehicles that this Driver drives
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.VehicleDriver[] getVehicleDrivers();
  
  
  /**
   * Gets the value of the ApplicableGoodDriverDiscount field.
   * Indicates whether this driver qualifies for a Good Driver discount
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isApplicableGoodDriverDiscount();
  
  
  /**
   * Gets the value of the DoNotOrderMVR field.
   * Indicates whether MVR records can be ordered for this driver
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDoNotOrderMVR();
  
  
  /**
   * Gets the value of the ExcludedInternal field.
   * If set, indicates that this driver is part of the policy but is not covered under this policy
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isExcludedInternal();
  
  
  /**
   * Removes the given element from the PolicyDriverMVRArray array. This is achieved by marking the element for removal.
   */
  public void removeFromPolicyDriverMVRArray(entity.PolicyDriverMVR element);
  
  
  /**
   * Removes the given element from the PolicyDriverMVRArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPolicyDriverMVRArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the VehicleDrivers array. This is achieved by marking the element for removal.
   */
  public void removeFromVehicleDrivers(entity.VehicleDriver element);
  
  
  /**
   * Removes the given element from the VehicleDrivers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromVehicleDrivers(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the ApplicableGoodDriverDiscount field.
   */
  public void setApplicableGoodDriverDiscount(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the DoNotOrderMVR field.
   */
  public void setDoNotOrderMVR(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the ExcludedInternal field.
   */
  public void setExcludedInternal(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the LicenseNumberInternal field.
   */
  public void setLicenseNumberInternal(java.lang.String value);
  
  
  /**
   * Sets the value of the LicenseStateInternal field.
   */
  public void setLicenseStateInternal(typekey.Jurisdiction value);
  
  
  /**
   * Sets the value of the NumberOfAccidents field.
   */
  public void setNumberOfAccidents(typekey.NumberOfAccidents value);
  
  
  /**
   * Sets the value of the NumberOfViolations field.
   */
  public void setNumberOfViolations(typekey.NumberOfAccidents value);
  
  
  /**
   * Sets the value of the PolicyDriverMVR field.
   */
  public void setPolicyDriverMVR(entity.PolicyDriverMVR value);
  
  
  /**
   * Sets the value of the PolicyDriverMVRArray field.
   */
  public void setPolicyDriverMVRArray(entity.PolicyDriverMVR[] value);
  
  
  public void setPolicyDriverMVRID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the QuickQuoteNumber field.
   */
  public void setQuickQuoteNumber(java.lang.Integer value);
  
  
  /**
   * Sets the value of the VehicleDrivers field.
   */
  public void setVehicleDrivers(entity.VehicleDriver[] value);
  
  
  
}