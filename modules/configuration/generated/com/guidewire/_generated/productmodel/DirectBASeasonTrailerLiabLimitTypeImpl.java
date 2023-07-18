package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BASeasonTrailerLiabCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectBASeasonTrailerLiabLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectBASeasonTrailerLiabLimitType {
  public DirectBASeasonTrailerLiabLimitTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BASeasonTrailerLiabCov getBASeasonTrailerLiabCov() {
    return (productmodel.BASeasonTrailerLiabCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BASeasonTrailerLiabCov getCoverage() {
    return (productmodel.BASeasonTrailerLiabCov)getClause();
  }
  
  
}