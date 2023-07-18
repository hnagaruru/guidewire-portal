package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ETLOptionCovTermPattern.eti;ETLOptionCovTermPattern.eix;ETLOptionCovTermPattern.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ETLOptionCovTermPatternInternal extends com.guidewire._generated.entity.ETLCoverageTermPatternInternal {
  /**
   * Adds the given element to the Options array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToOptions(entity.ETLCovTermOpt element);
  
  
  /**
   * Gets the value of the Options field.
   * All the options for the Coverage Pattern.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ETLCovTermOpt[] getOptions();
  
  
  /**
   * Gets the value of the ValueType field.
   * The Value Type for the coverage pattern. Should Correspond to the CovTermModelVal typelist
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getValueType();
  
  
  /**
   * Removes the given element from the Options array. This is achieved by marking the element for removal.
   */
  public void removeFromOptions(entity.ETLCovTermOpt element);
  
  
  /**
   * Removes the given element from the Options array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromOptions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Options field.
   */
  public void setOptions(entity.ETLCovTermOpt[] value);
  
  
  /**
   * Sets the value of the ValueType field.
   */
  public void setValueType(java.lang.String value);
  
  
  
}