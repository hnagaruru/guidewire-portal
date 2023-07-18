package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ETLClausePattern.eti;ETLClausePattern.eix;ETLClausePattern.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ETLClausePatternInternal extends com.guidewire._generated.entity.VersionableInternal {
  /**
   * Adds the given element to the CoverageTermPatterns array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCoverageTermPatterns(entity.ETLCoverageTermPattern element);
  
  
  /**
   * Gets the value of the ClauseType field.
   * The type of this clause in the Product Model (Coverage, Exclusion, Policy Condition)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getClauseType();
  
  
  /**
   * Gets the value of the CodeIdentifier field.
   * The CodeIdentifier (human readable) of the source clause pattern in the product model
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCodeIdentifier();
  
  
  /**
   * Gets the value of the CoverageCategory field.
   * The CoverageCategory of the Coverage Pattern
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCoverageCategory();
  
  
  /**
   * Gets the value of the CoverageSubtype field.
   * The coverage subtype of this clause in the Product Model
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCoverageSubtype();
  
  
  /**
   * Gets the value of the CoverageTermPatterns field.
   * All the options for the Coverage Pattern.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ETLCoverageTermPattern[] getCoverageTermPatterns();
  
  
  /**
   * Gets the value of the CoveredPartyType field.
   * The Covered Party Type of this Coverage Pattern
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCoveredPartyType();
  
  
  /**
   * Gets the value of the Name field.
   * The name of this clause pattern in the Product Model
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName();
  
  
  /**
   * Gets the value of the OwningEntityType field.
   * The Owning Entity type for this Coverage Pattern
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOwningEntityType();
  
  
  /**
   * Gets the value of the PatternID field.
   * The Public ID of the source clause pattern in the product model
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPatternID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ETLClausePattern getSubtype();
  
  
  /**
   * Removes the given element from the CoverageTermPatterns array. This is achieved by marking the element for removal.
   */
  public void removeFromCoverageTermPatterns(entity.ETLCoverageTermPattern element);
  
  
  /**
   * Removes the given element from the CoverageTermPatterns array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCoverageTermPatterns(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the ClauseType field.
   */
  public void setClauseType(java.lang.String value);
  
  
  /**
   * Sets the value of the CodeIdentifier field.
   */
  public void setCodeIdentifier(java.lang.String value);
  
  
  /**
   * Sets the value of the CoverageCategory field.
   */
  public void setCoverageCategory(java.lang.String value);
  
  
  /**
   * Sets the value of the CoverageSubtype field.
   */
  public void setCoverageSubtype(java.lang.String value);
  
  
  /**
   * Sets the value of the CoverageTermPatterns field.
   */
  public void setCoverageTermPatterns(entity.ETLCoverageTermPattern[] value);
  
  
  /**
   * Sets the value of the CoveredPartyType field.
   */
  public void setCoveredPartyType(java.lang.String value);
  
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value);
  
  
  /**
   * Sets the value of the OwningEntityType field.
   */
  public void setOwningEntityType(java.lang.String value);
  
  
  /**
   * Sets the value of the PatternID field.
   */
  public void setPatternID(java.lang.String value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.ETLClausePattern value);
  
  
  
}