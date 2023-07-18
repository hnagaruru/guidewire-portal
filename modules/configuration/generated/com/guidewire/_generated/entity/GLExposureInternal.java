package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLExposure.eti;GLExposure.eix;GLExposure.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GLExposureInternal extends com.guidewire._generated.entity.EffDatedInternal {
  /**
   * Adds the given element to the Costs array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCosts(entity.GLCovExposureCost element);
  
  
  /**
   * Gets the value of the AuditedBasis field.
   * The basis amount deteremined by an auditor.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getAuditedBasis();
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GLExposure getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the ClassCodeInternal field.
   * Class code of exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GLClassCode getClassCodeInternal();
  
  
  public gw.pl.persistence.core.Key getClassCodeInternalID();
  
  
  /**
   * Gets the value of the Costs field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GLCovExposureCost[] getCosts();
  
  
  /**
   * Gets the value of the Description field.
   * Description of exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GLExposure getFixed();
  
  
  /**
   * Gets the value of the FixedBasisAmount field.
   * Basis amount of exposure if it's not a scalable amount
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getFixedBasisAmount();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the GLLine field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GeneralLiabilityLine getGLLine();
  
  
  public gw.pl.persistence.core.Key getGLLineID();
  
  
  /**
   * Gets the value of the Location field.
   * Location of exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLocation getLocation();
  
  
  public gw.pl.persistence.core.Key getLocationID();
  
  
  /**
   * Gets the value of the ScalableBasisAmount field.
   * Basis amount of exposure if it's a scalable amount
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getScalableBasisAmount();
  
  
  /**
   * Removes the given element from the Costs array. This is achieved by marking the element for removal.
   */
  public void removeFromCosts(entity.GLCovExposureCost element);
  
  
  /**
   * Removes the given element from the Costs array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the AuditedBasis field.
   */
  public void setAuditedBasis(java.lang.Integer value);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.GLExposure value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ClassCodeInternal field.
   */
  public void setClassCodeInternal(entity.GLClassCode value);
  
  
  public void setClassCodeInternalID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Costs field.
   */
  public void setCosts(entity.GLCovExposureCost[] value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.GLExposure value);
  
  
  /**
   * Sets the value of the FixedBasisAmount field.
   */
  public void setFixedBasisAmount(java.lang.Integer value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the GLLine field.
   */
  public void setGLLine(entity.GeneralLiabilityLine value);
  
  
  public void setGLLineID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Location field.
   */
  public void setLocation(entity.PolicyLocation value);
  
  
  public void setLocationID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ScalableBasisAmount field.
   */
  public void setScalableBasisAmount(java.lang.Integer value);
  
  
  
}