package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "InlandMarineLine.eti;InlandMarineLine.eix;InlandMarineLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface InlandMarineLineInternal extends com.guidewire._generated.entity.PolicyLineInternal, gw.api.domain.LineSpecificLocationContainer, gw.api.policy.PolicyLineJavaMethods {
  /**
   * Adds the given element to the IMCosts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToIMCosts(entity.IMCost element);
  
  
  /**
   * Adds the given element to the IMCoverageParts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToIMCoverageParts(entity.IMCoveragePart element);
  
  
  /**
   * Adds the given element to the IMLocations array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToIMLocations(entity.IMLocation element);
  
  
  /**
   * Gets the value of the IMCosts field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IMCost[] getIMCosts();
  
  
  /**
   * Gets the value of the IMCoverageParts field.
   * Coverage Parts for Inland Marine policy line.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IMCoveragePart[] getIMCoverageParts();
  
  
  /**
   * Array association for partition IMCoveragePartsBySubtype on array IMCoverageParts
   */
  public entity.IMCoveragePart getIMCoveragePartsBySubtype(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the IMLocations field.
   * Locations on this policy line.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IMLocation[] getIMLocations();
  
  
  /**
   * Removes the given element from the IMCosts array. This is achieved by marking the element for removal.
   */
  public void removeFromIMCosts(entity.IMCost element);
  
  
  /**
   * Removes the given element from the IMCosts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromIMCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the IMCoverageParts array. This is achieved by marking the element for removal.
   */
  public void removeFromIMCoverageParts(entity.IMCoveragePart element);
  
  
  /**
   * Removes the given element from the IMCoverageParts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromIMCoverageParts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the IMLocations array. This is achieved by marking the element for removal.
   */
  public void removeFromIMLocations(entity.IMLocation element);
  
  
  /**
   * Removes the given element from the IMLocations array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromIMLocations(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the IMCosts field.
   */
  public void setIMCosts(entity.IMCost[] value);
  
  
  /**
   * Sets the value of the IMCoverageParts field.
   */
  public void setIMCoverageParts(entity.IMCoveragePart[] value);
  
  
  /**
   * Sets the value of the IMLocations field.
   */
  public void setIMLocations(entity.IMLocation[] value);
  
  
  
}