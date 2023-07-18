package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ETLPackageCovTermPattern.eti;ETLPackageCovTermPattern.eix;ETLPackageCovTermPattern.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ETLPackageCovTermPatternInternal extends com.guidewire._generated.entity.ETLCoverageTermPatternInternal {
  /**
   * Adds the given element to the Packages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPackages(entity.ETLCovTermPack element);
  
  
  /**
   * Gets the value of the Packages field.
   * All the packages for the Coverage Pattern.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ETLCovTermPack[] getPackages();
  
  
  /**
   * Removes the given element from the Packages array. This is achieved by marking the element for removal.
   */
  public void removeFromPackages(entity.ETLCovTermPack element);
  
  
  /**
   * Removes the given element from the Packages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPackages(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Packages field.
   */
  public void setPackages(entity.ETLCovTermPack[] value);
  
  
  
}