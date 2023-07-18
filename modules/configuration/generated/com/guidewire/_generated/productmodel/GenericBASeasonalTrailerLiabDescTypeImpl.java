package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BASeasonTrailerLiabCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericBASeasonalTrailerLiabDescTypeImpl extends com.guidewire.pc.api.domain.covterm.StringCovTermInternal implements productmodel.GenericBASeasonalTrailerLiabDescType {
  public GenericBASeasonalTrailerLiabDescTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
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