package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Territory.eti;Territory.eix;Territory.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface TerritoryInternal extends com.guidewire._generated.entity.VersionableInternal {
  /**
   * Gets the value of the DBTerritory field.
   * Database Territory entity
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.DBTerritory getDBTerritory();
  
  
  public gw.pl.persistence.core.Key getDBTerritoryID();
  
  
  /**
   * Sets the value of the DBTerritory field.
   */
  public void setDBTerritory(entity.DBTerritory value);
  
  
  public void setDBTerritoryID(gw.pl.persistence.core.Key value);
  
  
  
}