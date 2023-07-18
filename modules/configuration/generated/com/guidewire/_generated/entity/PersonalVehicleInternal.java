package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PersonalVehicle.eti;PersonalVehicle.eix;PersonalVehicle.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PersonalVehicleInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.ModifiableInternal, com.guidewire._generated.entity.CoverableInternal, gw.api.contact.AdditionalInterestContainer, gw.api.copier.EffDatedCopyable, gw.api.domain.CoverableAdapter, gw.api.domain.ModifiableAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the AdditionalInterests array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToAdditionalInterests(entity.PAVhcleAddlInterest element);
  
  
  /**
   * Adds the given element to the Costs array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCosts(entity.PersonalAutoCovCost element);
  
  
  /**
   * Adds the given element to the Coverages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCoverages(entity.PersonalVehicleCov element);
  
  
  /**
   * Adds the given element to the Drivers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToDrivers(entity.VehicleDriver element);
  
  
  /**
   * Adds the given element to the PAVehicleModifiers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPAVehicleModifiers(entity.PAVehicleModifier element);
  
  
  /**
   * Gets the value of the AdditionalInterests field.
   * Third parties with an additional interest in the vehicle
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PAVhcleAddlInterest[] getAdditionalInterests();
  
  
  /**
   * Gets the value of the AnnualMileage field.
   * Annual miles for this vehicle
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getAnnualMileage();
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PersonalVehicle getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BasisAmount field.
   * Basis Amount
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBasisAmount();
  
  
  /**
   * Gets the value of the BodyType field.
   * Body type of the vehicle.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BodyType getBodyType();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the Color field.
   * Color of the vehicle.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getColor();
  
  
  /**
   * Gets the value of the CommutingMiles field.
   * Daily one-way commuting mileage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getCommutingMiles();
  
  
  /**
   * Gets the value of the CostNew field.
   * Original retail cost of car.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getCostNew();
  
  
  /**
   * Gets the value of the CostNew_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getCostNew_amt();
  
  
  /**
   * Gets the value of the CostNew_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getCostNew_cur();
  
  
  /**
   * Gets the value of the Costs field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PersonalAutoCovCost[] getCosts();
  
  
  /**
   * Gets the value of the Coverages field.
   * All coverages that apply directly to this vehicle.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PersonalVehicleCov[] getCoverages();
  
  
  /**
   * Gets the value of the Drivers field.
   * All drivers associated with this vehicle
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.VehicleDriver[] getDrivers();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PersonalVehicle getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the GarageLocation field.
   * Location of vehicle.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLocation getGarageLocation();
  
  
  public gw.pl.persistence.core.Key getGarageLocationID();
  
  
  /**
   * Gets the value of the LengthOfLease field.
   * The lease period of a leased or a rented vehicle.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.LengthOfLease getLengthOfLease();
  
  
  /**
   * Gets the value of the LicensePlate field.
   * License plate of the vehicle.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLicensePlate();
  
  
  /**
   * Gets the value of the LicenseState field.
   * State in which the vehicle is licensed.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.State getLicenseState();
  
  
  /**
   * Gets the value of the Make field.
   * Make of the vehicle.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getMake();
  
  
  /**
   * Gets the value of the Model field.
   * Model of the vehicle.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getModel();
  
  
  /**
   * Gets the value of the PALine field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PersonalAutoLine getPALine();
  
  
  public gw.pl.persistence.core.Key getPALineID();
  
  
  /**
   * Gets the value of the PAVehicleModifiers field.
   * Rating info for the vehicle
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PAVehicleModifier[] getPAVehicleModifiers();
  
  
  /**
   * Gets the value of the PipCovered field.
   * Indicate how PIP should be rated
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PipCovered getPipCovered();
  
  
  /**
   * Gets the value of the PrimaryUse field.
   * Primary use of the vehicle
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.VehiclePrimaryUse getPrimaryUse();
  
  
  /**
   * Gets the value of the QuickQuoteNumber field.
   * The vehicle number for quick quote
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getQuickQuoteNumber();
  
  
  /**
   * Gets the value of the StatedValue field.
   * User enter stated value of vehicle
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getStatedValue();
  
  
  /**
   * Gets the value of the StatedValue_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getStatedValue_amt();
  
  
  /**
   * Gets the value of the StatedValue_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getStatedValue_cur();
  
  
  /**
   * Gets the value of the VehicleNumber field.
   * Vehicle number
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getVehicleNumber();
  
  
  /**
   * Gets the value of the VehicleType field.
   * Type of the vehicle.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.VehicleType getVehicleType();
  
  
  /**
   * Gets the value of the Vin field.
   * VIN (vehicle identification number) of the vehicle.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getVin();
  
  
  /**
   * Gets the value of the Year field.
   * Vehicle model year
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getYear();
  
  
  /**
   * Gets the value of the LeaseOrRent field.
   * If this vehicle is leased or rented.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isLeaseOrRent();
  
  
  /**
   * Removes the given element from the AdditionalInterests array. This is achieved by marking the element for removal.
   */
  public void removeFromAdditionalInterests(entity.PAVhcleAddlInterest element);
  
  
  /**
   * Removes the given element from the AdditionalInterests array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromAdditionalInterests(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Costs array. This is achieved by marking the element for removal.
   */
  public void removeFromCosts(entity.PersonalAutoCovCost element);
  
  
  /**
   * Removes the given element from the Costs array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   */
  public void removeFromCoverages(entity.PersonalVehicleCov element);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCoverages(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Drivers array. This is achieved by marking the element for removal.
   */
  public void removeFromDrivers(entity.VehicleDriver element);
  
  
  /**
   * Removes the given element from the Drivers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromDrivers(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the PAVehicleModifiers array. This is achieved by marking the element for removal.
   */
  public void removeFromPAVehicleModifiers(entity.PAVehicleModifier element);
  
  
  /**
   * Removes the given element from the PAVehicleModifiers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPAVehicleModifiers(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the AdditionalInterests field.
   */
  public void setAdditionalInterests(entity.PAVhcleAddlInterest[] value);
  
  
  /**
   * Sets the value of the AnnualMileage field.
   */
  public void setAnnualMileage(java.lang.Integer value);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.PersonalVehicle value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BasisAmount field.
   */
  public void setBasisAmount(java.lang.Integer value);
  
  
  /**
   * Sets the value of the BodyType field.
   */
  public void setBodyType(typekey.BodyType value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Color field.
   */
  public void setColor(java.lang.String value);
  
  
  /**
   * Sets the value of the CommutingMiles field.
   */
  public void setCommutingMiles(java.lang.Integer value);
  
  
  /**
   * Sets the value of the CostNew field.
   */
  public void setCostNew(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the CostNew_amt field.
   */
  public void setCostNew_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the CostNew_cur field.
   */
  public void setCostNew_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the Costs field.
   */
  public void setCosts(entity.PersonalAutoCovCost[] value);
  
  
  /**
   * Sets the value of the Coverages field.
   */
  public void setCoverages(entity.PersonalVehicleCov[] value);
  
  
  /**
   * Sets the value of the Drivers field.
   */
  public void setDrivers(entity.VehicleDriver[] value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.PersonalVehicle value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the GarageLocation field.
   */
  public void setGarageLocation(entity.PolicyLocation value);
  
  
  public void setGarageLocationID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the LeaseOrRent field.
   */
  public void setLeaseOrRent(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the LengthOfLease field.
   */
  public void setLengthOfLease(typekey.LengthOfLease value);
  
  
  /**
   * Sets the value of the LicensePlate field.
   */
  public void setLicensePlate(java.lang.String value);
  
  
  /**
   * Sets the value of the LicenseState field.
   */
  public void setLicenseState(typekey.State value);
  
  
  /**
   * Sets the value of the Make field.
   */
  public void setMake(java.lang.String value);
  
  
  /**
   * Sets the value of the Model field.
   */
  public void setModel(java.lang.String value);
  
  
  /**
   * Sets the value of the PALine field.
   */
  public void setPALine(entity.PersonalAutoLine value);
  
  
  public void setPALineID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PAVehicleModifiers field.
   */
  public void setPAVehicleModifiers(entity.PAVehicleModifier[] value);
  
  
  /**
   * Sets the value of the PipCovered field.
   */
  public void setPipCovered(typekey.PipCovered value);
  
  
  /**
   * Sets the value of the PrimaryUse field.
   */
  public void setPrimaryUse(typekey.VehiclePrimaryUse value);
  
  
  /**
   * Sets the value of the QuickQuoteNumber field.
   */
  public void setQuickQuoteNumber(java.lang.Integer value);
  
  
  /**
   * Sets the value of the StatedValue field.
   */
  public void setStatedValue(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the StatedValue_amt field.
   */
  public void setStatedValue_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the StatedValue_cur field.
   */
  public void setStatedValue_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the VehicleNumber field.
   */
  public void setVehicleNumber(java.lang.Integer value);
  
  
  /**
   * Sets the value of the VehicleType field.
   */
  public void setVehicleType(typekey.VehicleType value);
  
  
  /**
   * Sets the value of the Vin field.
   */
  public void setVin(java.lang.String value);
  
  
  /**
   * Sets the value of the Year field.
   */
  public void setYear(java.lang.Integer value);
  
  
  
}