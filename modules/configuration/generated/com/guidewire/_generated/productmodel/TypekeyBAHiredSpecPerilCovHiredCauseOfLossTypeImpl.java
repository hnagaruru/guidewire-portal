package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BAHiredSpecPerilCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TypekeyBAHiredSpecPerilCovHiredCauseOfLossTypeImpl extends com.guidewire.pc.api.domain.covterm.TypekeyCovTermInternal<typekey.SpecifiedCauseOfLoss> implements productmodel.TypekeyBAHiredSpecPerilCovHiredCauseOfLossType {
  public TypekeyBAHiredSpecPerilCovHiredCauseOfLossTypeImpl(gw.api.productmodel.TypekeyCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BAHiredSpecPerilCov getBAHiredSpecPerilCov() {
    return (productmodel.BAHiredSpecPerilCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BAHiredSpecPerilCov getCoverage() {
    return (productmodel.BAHiredSpecPerilCov)getClause();
  }
  
  
}