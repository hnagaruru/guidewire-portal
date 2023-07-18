package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "MVRIncident.eti;MVRIncident.eix;MVRIncident.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface MVRIncidentInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire.pc.domain.motorvehiclerecord.MVRIncidentPulicMethods, gw.api.motorvehiclerecord.IMVRIncident {
  /**
   * Gets the value of the Accident field.
   * Whether an accident was part of this incident
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAccident();
  
  
  /**
   * Gets the value of the CarrierViolationCode field.
   * The insurance carrier specific code that can be used for standard processing or reporting.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCarrierViolationCode();
  
  
  /**
   * Gets the value of the ConvictionDate field.
   * Date of conviction or reinstatement of license.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getConvictionDate();
  
  
  /**
   * Gets the value of the Court field.
   * The court or agency of conviction.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCourt();
  
  
  /**
   * Gets the value of the Description field.
   * State Department of Motor Vehicle (DMV) description.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the Disposition field.
   * The verdict on the violation
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDisposition();
  
  
  /**
   * Gets the value of the EligibleDate field.
   * The date the driver becomes eligible based on the imposed restriction on a violation such as date driver is eligible to driver after a suspension.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEligibleDate();
  
  
  /**
   * Gets the value of the IncidentNumber field.
   * An unique identifier for incidents of the same mvr
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getIncidentNumber();
  
  
  /**
   * Gets the value of the IncidentType field.
   * Type of incident.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.MVRIncidentType getIncidentType();
  
  
  /**
   * Gets the value of the Location field.
   * City or location of the incident.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLocation();
  
  
  /**
   * Gets the value of the Misc field.
   * Any other information not captured in the defined fields
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getMisc();
  
  
  /**
   * Gets the value of the MotorVehicleRecord field.
   * Motor Vehicle Record containing this incident.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.MVR getMotorVehicleRecord();
  
  
  public gw.pl.persistence.core.Key getMotorVehicleRecordID();
  
  
  /**
   * Gets the value of the OrderNumber field.
   * The tracking number for the order or violation
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOrderNumber();
  
  
  /**
   * Gets the value of the Points field.
   * Total points assigned by the Department of Motor Vehicle (DMV) to the driver.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getPoints();
  
  
  /**
   * Gets the value of the Speed field.
   * The speed of the vehicle when the incident occurred
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSpeed();
  
  
  /**
   * Gets the value of the SpeedZone field.
   * The Zone speed limit where the incident occurred
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSpeedZone();
  
  
  /**
   * Gets the value of the State field.
   * State or county of the incident.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getState();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.MVRIncident getSubtype();
  
  
  /**
   * Gets the value of the ViolationCode field.
   * The state specific violation or incident code as returned by Department of Motor Vehicles (DMV).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getViolationCode();
  
  
  /**
   * Gets the value of the ViolationDate field.
   * Date of violation or suspension of license.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getViolationDate();
  
  
  /**
   * Sets the value of the Accident field.
   */
  public void setAccident(java.lang.String value);
  
  
  /**
   * Sets the value of the CarrierViolationCode field.
   */
  public void setCarrierViolationCode(java.lang.String value);
  
  
  /**
   * Sets the value of the ConvictionDate field.
   */
  public void setConvictionDate(java.util.Date value);
  
  
  /**
   * Sets the value of the Court field.
   */
  public void setCourt(java.lang.String value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the Disposition field.
   */
  public void setDisposition(java.lang.String value);
  
  
  /**
   * Sets the value of the EligibleDate field.
   */
  public void setEligibleDate(java.util.Date value);
  
  
  /**
   * Sets the value of the IncidentNumber field.
   */
  public void setIncidentNumber(java.lang.Integer value);
  
  
  /**
   * Sets the value of the IncidentType field.
   */
  public void setIncidentType(typekey.MVRIncidentType value);
  
  
  /**
   * Sets the value of the Location field.
   */
  public void setLocation(java.lang.String value);
  
  
  /**
   * Sets the value of the Misc field.
   */
  public void setMisc(java.lang.String value);
  
  
  /**
   * Sets the value of the MotorVehicleRecord field.
   */
  public void setMotorVehicleRecord(entity.MVR value);
  
  
  public void setMotorVehicleRecordID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the OrderNumber field.
   */
  public void setOrderNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the Points field.
   */
  public void setPoints(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Speed field.
   */
  public void setSpeed(java.lang.String value);
  
  
  /**
   * Sets the value of the SpeedZone field.
   */
  public void setSpeedZone(java.lang.String value);
  
  
  /**
   * Sets the value of the State field.
   */
  public void setState(java.lang.String value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.MVRIncident value);
  
  
  /**
   * Sets the value of the ViolationCode field.
   */
  public void setViolationCode(java.lang.String value);
  
  
  /**
   * Sets the value of the ViolationDate field.
   */
  public void setViolationDate(java.util.Date value);
  
  
  
}