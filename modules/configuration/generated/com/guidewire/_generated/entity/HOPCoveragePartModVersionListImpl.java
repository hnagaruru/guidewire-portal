package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPCoveragePartMod.eti;HOPCoveragePartMod.eix;HOPCoveragePartMod.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPCoveragePartModVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPCoveragePartModVersionList {
  public HOPCoveragePartModVersionListImpl(entity.HOPCoveragePartMod base)  {
    super(base);
  }
  
  public HOPCoveragePartModVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPCoveragePartMod AsOf(java.util.Date date) {
    return (entity.HOPCoveragePartMod)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPCoveragePartRF> HOPCoveragePartRateFactorsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPCoveragePartMod.HOPCOVERAGEPARTRATEFACTORS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToHOPCoveragePartRateFactors(entity.HOPCoveragePartRF bean) {
    addToArray(entity.HOPCoveragePartMod.HOPCOVERAGEPARTRATEFACTORS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPCoveragePartMod> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPCoveragePartRFVersionList> getHOPCoveragePartRateFactors() {
    return (java.util.List)getArray(entity.HOPCoveragePartMod.HOPCOVERAGEPARTRATEFACTORS_PROP.get());
  }
  
  
}