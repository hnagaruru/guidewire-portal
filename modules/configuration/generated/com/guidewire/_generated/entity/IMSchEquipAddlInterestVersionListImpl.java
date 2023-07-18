package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMSchEquipAddlInterest.eti;IMSchEquipAddlInterest.eix;IMSchEquipAddlInterest.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class IMSchEquipAddlInterestVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.IMSchEquipAddlInterestVersionList {
  public IMSchEquipAddlInterestVersionListImpl(entity.IMSchEquipAddlInterest base)  {
    super(base);
  }
  
  public IMSchEquipAddlInterestVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.IMSchEquipAddlInterest AsOf(java.util.Date date) {
    return (entity.IMSchEquipAddlInterest)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMSchEquipAddlInterest> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}