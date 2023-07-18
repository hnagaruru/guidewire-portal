package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ETLCovTermPack.eti;ETLCovTermPack.eix;ETLCovTermPack.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ETLCovTermPackInternal extends com.guidewire._generated.entity.VersionableInternal {
  /**
   * Adds the given element to the PackageTerms array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPackageTerms(entity.ETLPackageTerm element);
  
  
  /**
   * Gets the value of the CodeIdentifier field.
   * The CodeIdentifier (human readable) of the source pattern in the product model
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCodeIdentifier();
  
  
  /**
   * Gets the value of the CoverageTermPattern field.
   * the foreign key to the Coverage Pattern for this package
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ETLPackageCovTermPattern getCoverageTermPattern();
  
  
  public gw.pl.persistence.core.Key getCoverageTermPatternID();
  
  
  /**
   * Gets the value of the Currency field.
   * Currency of the package covterm option
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCurrency();
  
  
  /**
   * Gets the value of the Name field.
   * The Name for this package
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName();
  
  
  /**
   * Gets the value of the PackageCode field.
   * The Package Code for this package
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPackageCode();
  
  
  /**
   * Gets the value of the PackageTerms field.
   * All the package terms for the package.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ETLPackageTerm[] getPackageTerms();
  
  
  /**
   * Gets the value of the PatternID field.
   * The Public ID of the source pattern in the product model
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPatternID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ETLCovTermPack getSubtype();
  
  
  /**
   * Removes the given element from the PackageTerms array. This is achieved by marking the element for removal.
   */
  public void removeFromPackageTerms(entity.ETLPackageTerm element);
  
  
  /**
   * Removes the given element from the PackageTerms array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPackageTerms(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the CodeIdentifier field.
   */
  public void setCodeIdentifier(java.lang.String value);
  
  
  /**
   * Sets the value of the CoverageTermPattern field.
   */
  public void setCoverageTermPattern(entity.ETLPackageCovTermPattern value);
  
  
  public void setCoverageTermPatternID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Currency field.
   */
  public void setCurrency(java.lang.String value);
  
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value);
  
  
  /**
   * Sets the value of the PackageCode field.
   */
  public void setPackageCode(java.lang.String value);
  
  
  /**
   * Sets the value of the PackageTerms field.
   */
  public void setPackageTerms(entity.ETLPackageTerm[] value);
  
  
  /**
   * Sets the value of the PatternID field.
   */
  public void setPatternID(java.lang.String value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.ETLCovTermPack value);
  
  
  
}