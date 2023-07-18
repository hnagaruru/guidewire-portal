package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BAHiredSpecPerilCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionBAHiredSpecPerilDdctTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionBAHiredSpecPerilDdctType> implements productmodel.OptionBAHiredSpecPerilDdctType {
  public OptionBAHiredSpecPerilDdctTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
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