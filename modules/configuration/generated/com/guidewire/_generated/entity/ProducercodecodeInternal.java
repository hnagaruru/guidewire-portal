package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Producercodecode.eti;Producercodecode.eix;Producercodecode.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ProducercodecodeInternal extends com.guidewire._generated.entity.VersionableInternal {
  /**
   * Gets the value of the ForeignEntity field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ProducerCode getForeignEntity();
  
  
  public gw.pl.persistence.core.Key getForeignEntityID();
  
  
  /**
   * Gets the value of the Owner field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ProducerCode getOwner();
  
  
  public gw.pl.persistence.core.Key getOwnerID();
  
  
  /**
   * Sets the value of the ForeignEntity field.
   */
  public void setForeignEntity(entity.ProducerCode value);
  
  
  public void setForeignEntityID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Owner field.
   */
  public void setOwner(entity.ProducerCode value);
  
  
  public void setOwnerID(gw.pl.persistence.core.Key value);
  
  
  
}