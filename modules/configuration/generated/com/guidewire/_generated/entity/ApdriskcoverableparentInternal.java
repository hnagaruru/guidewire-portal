package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Apdriskcoverableparent.eti;Apdriskcoverableparent.eix;Apdriskcoverableparent.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ApdriskcoverableparentInternal extends com.guidewire._generated.entity.EffDatedInternal {
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Apdriskcoverableparent getBasedOnValue();
  
  
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
  public entity.Apdriskcoverableparent getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the ForeignEntity field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRiskCoverable getForeignEntity();
  
  
  public gw.pl.persistence.core.Key getForeignEntityID();
  
  
  /**
   * Gets the value of the Owner field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRiskCoverable getOwner();
  
  
  public gw.pl.persistence.core.Key getOwnerID();
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.Apdriskcoverableparent value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.Apdriskcoverableparent value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ForeignEntity field.
   */
  public void setForeignEntity(entity.APDRiskCoverable value);
  
  
  public void setForeignEntityID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Owner field.
   */
  public void setOwner(entity.APDRiskCoverable value);
  
  
  public void setOwnerID(gw.pl.persistence.core.Key value);
  
  
  
}