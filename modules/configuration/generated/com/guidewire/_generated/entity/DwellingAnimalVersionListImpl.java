package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "DwellingAnimal.eti;DwellingAnimal.eix;DwellingAnimal.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class DwellingAnimalVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.DwellingAnimalVersionList {
  public DwellingAnimalVersionListImpl(entity.DwellingAnimal base)  {
    super(base);
  }
  
  public DwellingAnimalVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.DwellingAnimal AsOf(java.util.Date date) {
    return (entity.DwellingAnimal)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.DwellingAnimal> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}