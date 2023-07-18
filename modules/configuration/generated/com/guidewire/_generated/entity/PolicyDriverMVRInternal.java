package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyDriverMVR.eti;PolicyDriverMVR.eix;PolicyDriverMVR.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PolicyDriverMVRInternal extends com.guidewire._generated.entity.EffDatedInternal, gw.api.copier.EffDatedCopyable, gw.api.logicalmatch.EffDatedLogicalMatcher, gw.api.motorvehiclerecord.IMVRSubject {
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyDriverMVR getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyDriverMVR getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the InternalRequestID field.
   * Internal Request identifier.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getInternalRequestID();
  
  
  /**
   * Gets the value of the InternalRequestIDDenorm field.
   * denorm field for InternalRequestID
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getInternalRequestIDDenorm();
  
  
  /**
   * Gets the value of the NumberOfAccidents field.
   * Number of accidents in the Motor Vehicle Record.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNumberOfAccidents();
  
  
  /**
   * Gets the value of the NumberOfViolations field.
   * Number of violations in the Motor Vehicle Record.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNumberOfViolations();
  
  
  /**
   * Gets the value of the OrderStatus field.
   * Order status
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.MVRStatus getOrderStatus();
  
  
  /**
   * Gets the value of the PersonalAutoLine field.
   * The policy line
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PersonalAutoLine getPersonalAutoLine();
  
  
  public gw.pl.persistence.core.Key getPersonalAutoLineID();
  
  
  /**
   * Gets the value of the Points field.
   * Total points assigned by the DMV to the driver
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getPoints();
  
  
  /**
   * Gets the value of the PolicyDriver field.
   * The driver.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyDriver getPolicyDriver();
  
  
  public gw.pl.persistence.core.Key getPolicyDriverID();
  
  
  /**
   * Gets the value of the StatusDate field.
   * Date of the last status change.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getStatusDate();
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.PolicyDriverMVR value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.PolicyDriverMVR value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the InternalRequestID field.
   */
  public void setInternalRequestID(java.lang.String value);
  
  
  /**
   * Sets the value of the InternalRequestIDDenorm field.
   */
  public void setInternalRequestIDDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the NumberOfAccidents field.
   */
  public void setNumberOfAccidents(java.lang.Integer value);
  
  
  /**
   * Sets the value of the NumberOfViolations field.
   */
  public void setNumberOfViolations(java.lang.Integer value);
  
  
  /**
   * Sets the value of the OrderStatus field.
   */
  public void setOrderStatus(typekey.MVRStatus value);
  
  
  /**
   * Sets the value of the PersonalAutoLine field.
   */
  public void setPersonalAutoLine(entity.PersonalAutoLine value);
  
  
  public void setPersonalAutoLineID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Points field.
   */
  public void setPoints(java.lang.Integer value);
  
  
  /**
   * Sets the value of the PolicyDriver field.
   */
  public void setPolicyDriver(entity.PolicyDriver value);
  
  
  public void setPolicyDriverID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the StatusDate field.
   */
  public void setStatusDate(java.util.Date value);
  
  
  
}