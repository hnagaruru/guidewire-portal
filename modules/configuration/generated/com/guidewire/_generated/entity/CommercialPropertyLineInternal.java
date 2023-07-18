package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CommercialPropertyLine.eti;CommercialPropertyLine.eix;CommercialPropertyLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface CommercialPropertyLineInternal extends com.guidewire._generated.entity.PolicyLineInternal, com.guidewire._generated.entity.CoverableInternal, com.guidewire._generated.entity.ModifiableInternal, gw.api.domain.CoverableAdapter, gw.api.domain.LineSpecificLocationContainer, gw.api.domain.ModifiableAdapter, gw.api.policy.PolicyLineJavaMethods {
  /**
   * Adds the given element to the CPBlankets array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCPBlankets(entity.CPBlanket element);
  
  
  /**
   * Adds the given element to the CPCosts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCPCosts(entity.CPCost element);
  
  
  /**
   * Adds the given element to the CPLineConditions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCPLineConditions(entity.CommercialPropertyCond element);
  
  
  /**
   * Adds the given element to the CPLineCoverages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCPLineCoverages(entity.CommercialPropertyCov element);
  
  
  /**
   * Adds the given element to the CPLineExclusions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCPLineExclusions(entity.CommercialPropertyExcl element);
  
  
  /**
   * Adds the given element to the CPLocations array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCPLocations(entity.CPLocation element);
  
  
  /**
   * Adds the given element to the CPModifiers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCPModifiers(entity.CPModifier element);
  
  
  /**
   * Gets the value of the CPBlanketAutoNumberSeq field.
   * Sequence to autonumber cp blanket
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AutoNumberSequence getCPBlanketAutoNumberSeq();
  
  
  public gw.pl.persistence.core.Key getCPBlanketAutoNumberSeqID();
  
  
  /**
   * Gets the value of the CPBlankets field.
   * CP Blankets on this policy line.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CPBlanket[] getCPBlankets();
  
  
  /**
   * Gets the value of the CPCosts field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CPCost[] getCPCosts();
  
  
  /**
   * Gets the value of the CPLineConditions field.
   * Line-level conditions for Commercial Property.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CommercialPropertyCond[] getCPLineConditions();
  
  
  /**
   * Gets the value of the CPLineCoverages field.
   * Line-level coverages for Commercial Property.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CommercialPropertyCov[] getCPLineCoverages();
  
  
  /**
   * Gets the value of the CPLineExclusions field.
   * Line-level exclusions for Commercial Property.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CommercialPropertyExcl[] getCPLineExclusions();
  
  
  /**
   * Gets the value of the CPLocations field.
   * Locations on this policy line.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CPLocation[] getCPLocations();
  
  
  /**
   * Gets the value of the CPModifiers field.
   * Rating inputs for the line.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CPModifier[] getCPModifiers();
  
  
  /**
   * Removes the given element from the CPBlankets array. This is achieved by marking the element for removal.
   */
  public void removeFromCPBlankets(entity.CPBlanket element);
  
  
  /**
   * Removes the given element from the CPBlankets array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCPBlankets(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the CPCosts array. This is achieved by marking the element for removal.
   */
  public void removeFromCPCosts(entity.CPCost element);
  
  
  /**
   * Removes the given element from the CPCosts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCPCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the CPLineConditions array. This is achieved by marking the element for removal.
   */
  public void removeFromCPLineConditions(entity.CommercialPropertyCond element);
  
  
  /**
   * Removes the given element from the CPLineConditions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCPLineConditions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the CPLineCoverages array. This is achieved by marking the element for removal.
   */
  public void removeFromCPLineCoverages(entity.CommercialPropertyCov element);
  
  
  /**
   * Removes the given element from the CPLineCoverages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCPLineCoverages(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the CPLineExclusions array. This is achieved by marking the element for removal.
   */
  public void removeFromCPLineExclusions(entity.CommercialPropertyExcl element);
  
  
  /**
   * Removes the given element from the CPLineExclusions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCPLineExclusions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the CPLocations array. This is achieved by marking the element for removal.
   */
  public void removeFromCPLocations(entity.CPLocation element);
  
  
  /**
   * Removes the given element from the CPLocations array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCPLocations(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the CPModifiers array. This is achieved by marking the element for removal.
   */
  public void removeFromCPModifiers(entity.CPModifier element);
  
  
  /**
   * Removes the given element from the CPModifiers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCPModifiers(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the CPBlanketAutoNumberSeq field.
   */
  public void setCPBlanketAutoNumberSeq(entity.AutoNumberSequence value);
  
  
  public void setCPBlanketAutoNumberSeqID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the CPBlankets field.
   */
  public void setCPBlankets(entity.CPBlanket[] value);
  
  
  /**
   * Sets the value of the CPCosts field.
   */
  public void setCPCosts(entity.CPCost[] value);
  
  
  /**
   * Sets the value of the CPLineConditions field.
   */
  public void setCPLineConditions(entity.CommercialPropertyCond[] value);
  
  
  /**
   * Sets the value of the CPLineCoverages field.
   */
  public void setCPLineCoverages(entity.CommercialPropertyCov[] value);
  
  
  /**
   * Sets the value of the CPLineExclusions field.
   */
  public void setCPLineExclusions(entity.CommercialPropertyExcl[] value);
  
  
  /**
   * Sets the value of the CPLocations field.
   */
  public void setCPLocations(entity.CPLocation[] value);
  
  
  /**
   * Sets the value of the CPModifiers field.
   */
  public void setCPModifiers(entity.CPModifier[] value);
  
  
  
}