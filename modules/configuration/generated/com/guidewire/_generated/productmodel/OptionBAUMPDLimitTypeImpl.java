package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BAOwnedUMPDCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionBAUMPDLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionBAUMPDLimitType> implements productmodel.OptionBAUMPDLimitType {
  public OptionBAUMPDLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BAOwnedUMPDCov getBAOwnedUMPDCov() {
    return (productmodel.BAOwnedUMPDCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BAOwnedUMPDCov getCoverage() {
    return (productmodel.BAOwnedUMPDCov)getClause();
  }
  
  
}