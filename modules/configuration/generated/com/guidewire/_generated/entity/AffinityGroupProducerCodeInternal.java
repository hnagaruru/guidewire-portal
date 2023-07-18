package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AffinityGroupProducerCode.eti;AffinityGroupProducerCode.eix;AffinityGroupProducerCode.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface AffinityGroupProducerCodeInternal extends com.guidewire._generated.entity.VersionableInternal {
  /**
   * Gets the value of the AffinityGroup field.
   * Affinity group granted to the producer code.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AffinityGroup getAffinityGroup();
  
  
  public gw.pl.persistence.core.Key getAffinityGroupID();
  
  
  /**
   * Gets the value of the ProducerCode field.
   * The ProducerCode.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ProducerCode getProducerCode();
  
  
  public gw.pl.persistence.core.Key getProducerCodeID();
  
  
  /**
   * Sets the value of the AffinityGroup field.
   */
  public void setAffinityGroup(entity.AffinityGroup value);
  
  
  public void setAffinityGroupID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ProducerCode field.
   */
  public void setProducerCode(entity.ProducerCode value);
  
  
  public void setProducerCodeID(gw.pl.persistence.core.Key value);
  
  
  
}