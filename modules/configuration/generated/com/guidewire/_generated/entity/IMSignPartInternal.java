package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMSignPart.eti;IMSignPart.eix;IMSignPart.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface IMSignPartInternal extends com.guidewire._generated.entity.IMCoveragePartInternal {
  /**
   * Adds the given element to the IMSignPartCosts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToIMSignPartCosts(entity.IMSignPartCost element);
  
  
  /**
   * Adds the given element to the IMSigns array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToIMSigns(entity.IMSign element);
  
  
  /**
   * Gets the value of the Coinsurance field.
   * Coinsurance percentage values
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Coinsurance getCoinsurance();
  
  
  /**
   * Gets the value of the IMSignPartCosts field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IMSignPartCost[] getIMSignPartCosts();
  
  
  /**
   * Gets the value of the IMSigns field.
   * List of Covered Signs on this Coverage Part.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IMSign[] getIMSigns();
  
  
  /**
   * Gets the value of the SignAutoNumberSeq field.
   * Sequence to autonumber IMSigns
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AutoNumberSequence getSignAutoNumberSeq();
  
  
  public gw.pl.persistence.core.Key getSignAutoNumberSeqID();
  
  
  /**
   * Removes the given element from the IMSignPartCosts array. This is achieved by marking the element for removal.
   */
  public void removeFromIMSignPartCosts(entity.IMSignPartCost element);
  
  
  /**
   * Removes the given element from the IMSignPartCosts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromIMSignPartCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the IMSigns array. This is achieved by marking the element for removal.
   */
  public void removeFromIMSigns(entity.IMSign element);
  
  
  /**
   * Removes the given element from the IMSigns array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromIMSigns(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Coinsurance field.
   */
  public void setCoinsurance(typekey.Coinsurance value);
  
  
  /**
   * Sets the value of the IMSignPartCosts field.
   */
  public void setIMSignPartCosts(entity.IMSignPartCost[] value);
  
  
  /**
   * Sets the value of the IMSigns field.
   */
  public void setIMSigns(entity.IMSign[] value);
  
  
  /**
   * Sets the value of the SignAutoNumberSeq field.
   */
  public void setSignAutoNumberSeq(entity.AutoNumberSequence value);
  
  
  public void setSignAutoNumberSeqID(gw.pl.persistence.core.Key value);
  
  
  
}