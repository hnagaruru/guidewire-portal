package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Rtcoledge.eti;Rtcoledge.eix;Rtcoledge.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RtcoledgeInternal extends com.guidewire._generated.entity.VersionableInternal {
  /**
   * Gets the value of the ForeignEntity field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTableColumn getForeignEntity();
  
  
  public gw.pl.persistence.core.Key getForeignEntityID();
  
  
  /**
   * Gets the value of the Owner field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTableColumn getOwner();
  
  
  public gw.pl.persistence.core.Key getOwnerID();
  
  
  /**
   * Sets the value of the ForeignEntity field.
   */
  public void setForeignEntity(entity.RateTableColumn value);
  
  
  public void setForeignEntityID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Owner field.
   */
  public void setOwner(entity.RateTableColumn value);
  
  
  public void setOwnerID(gw.pl.persistence.core.Key value);
  
  
  
}