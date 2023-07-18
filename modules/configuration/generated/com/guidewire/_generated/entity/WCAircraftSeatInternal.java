package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCAircraftSeat.eti;WCAircraftSeat.eix;WCAircraftSeat.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface WCAircraftSeatInternal extends com.guidewire._generated.entity.EffDatedInternal, gw.api.copier.EffDatedCopyable, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Gets the value of the AircraftNumber field.
   * Aircraft N-Number
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAircraftNumber();
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCAircraftSeat getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the Description field.
   * Description
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCAircraftSeat getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the PassengerSeats field.
   * Number of rateable passenger seats
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getPassengerSeats();
  
  
  /**
   * Gets the value of the State field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getState();
  
  
  /**
   * Gets the value of the WCLine field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WorkersCompLine getWCLine();
  
  
  public gw.pl.persistence.core.Key getWCLineID();
  
  
  /**
   * Sets the value of the AircraftNumber field.
   */
  public void setAircraftNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.WCAircraftSeat value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.WCAircraftSeat value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PassengerSeats field.
   */
  public void setPassengerSeats(java.lang.Integer value);
  
  
  /**
   * Sets the value of the State field.
   */
  public void setState(typekey.Jurisdiction value);
  
  
  /**
   * Sets the value of the WCLine field.
   */
  public void setWCLine(entity.WorkersCompLine value);
  
  
  public void setWCLineID(gw.pl.persistence.core.Key value);
  
  
  
}