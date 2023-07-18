package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "MVROrder.eti;MVROrder.eix;MVROrder.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface MVROrderInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire.pc.domain.motorvehiclerecord.MVROrderPublicMethods, gw.api.motorvehiclerecord.IMVROrder {
  /**
   * Adds the given element to the MVREntities array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToMVREntities(entity.MVR element);
  
  
  /**
   * Gets the value of the DateOfBirthSC field.
   * Driver's date of birth used to request the MVR.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateOfBirthSC();
  
  
  /**
   * Gets the value of the FirstNameSC field.
   * Driver's first name used to request the MVR.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFirstNameSC();
  
  
  /**
   * Gets the value of the FirstNameSCDenorm field.
   * denorm field for FirstNameSC
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFirstNameSCDenorm();
  
  
  /**
   * Gets the value of the InternalRequestID field.
   * Internal Request unique identifier.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getInternalRequestID();
  
  
  /**
   * Gets the value of the LastNameSC field.
   * Driver's last name used to request the MVR.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLastNameSC();
  
  
  /**
   * Gets the value of the LastNameSCDenorm field.
   * denorm field for LastNameSC
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLastNameSCDenorm();
  
  
  /**
   * Gets the value of the LicenseNumberSC field.
   * Driver's license number used to request the MVR.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLicenseNumberSC();
  
  
  /**
   * Gets the value of the LicenseStateSC field.
   * Driver's license state used to request the MVR.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.State getLicenseStateSC();
  
  
  /**
   * Gets the value of the MVREntities field.
   * MVR report received for this order.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.MVR[] getMVREntities();
  
  
  /**
   * Gets the value of the MVRResponse field.
   * MVR Response sent by the Provider (Clear, Hit, No Hit, Delay, etc)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.MVRResponse getMVRResponse();
  
  
  /**
   * Gets the value of the MiddleNameSC field.
   * Driver's middle name or initial used to request the MVR.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getMiddleNameSC();
  
  
  /**
   * Gets the value of the OrderStatus field.
   * Order status
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.MVRStatus getOrderStatus();
  
  
  /**
   * Gets the value of the ProviderRequestID field.
   * Provider Request/order identifier.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProviderRequestID();
  
  
  /**
   * Gets the value of the ReportRequestedDate field.
   * Date when the report was requested.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getReportRequestedDate();
  
  
  /**
   * Gets the value of the StatusDate field.
   * Date of the last status change.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getStatusDate();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.MVROrder getSubtype();
  
  
  /**
   * Removes the given element from the MVREntities array. This is achieved by marking the element for removal.
   */
  public void removeFromMVREntities(entity.MVR element);
  
  
  /**
   * Removes the given element from the MVREntities array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromMVREntities(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the DateOfBirthSC field.
   */
  public void setDateOfBirthSC(java.util.Date value);
  
  
  /**
   * Sets the value of the FirstNameSC field.
   */
  public void setFirstNameSC(java.lang.String value);
  
  
  /**
   * Sets the value of the FirstNameSCDenorm field.
   */
  public void setFirstNameSCDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the InternalRequestID field.
   */
  public void setInternalRequestID(java.lang.String value);
  
  
  /**
   * Sets the value of the LastNameSC field.
   */
  public void setLastNameSC(java.lang.String value);
  
  
  /**
   * Sets the value of the LastNameSCDenorm field.
   */
  public void setLastNameSCDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the LicenseNumberSC field.
   */
  public void setLicenseNumberSC(java.lang.String value);
  
  
  /**
   * Sets the value of the LicenseStateSC field.
   */
  public void setLicenseStateSC(typekey.State value);
  
  
  /**
   * Sets the value of the MVREntities field.
   */
  public void setMVREntities(entity.MVR[] value);
  
  
  /**
   * Sets the value of the MVRResponse field.
   */
  public void setMVRResponse(typekey.MVRResponse value);
  
  
  /**
   * Sets the value of the MiddleNameSC field.
   */
  public void setMiddleNameSC(java.lang.String value);
  
  
  /**
   * Sets the value of the OrderStatus field.
   */
  public void setOrderStatus(typekey.MVRStatus value);
  
  
  /**
   * Sets the value of the ProviderRequestID field.
   */
  public void setProviderRequestID(java.lang.String value);
  
  
  /**
   * Sets the value of the ReportRequestedDate field.
   */
  public void setReportRequestedDate(java.util.Date value);
  
  
  /**
   * Sets the value of the StatusDate field.
   */
  public void setStatusDate(java.util.Date value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.MVROrder value);
  
  
  
}