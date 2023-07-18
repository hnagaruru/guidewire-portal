package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/CPLine/coveragepatterns/CPBlanketCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionCPBlanketCoinsuranceTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionCPBlanketCoinsuranceType> implements productmodel.OptionCPBlanketCoinsuranceType {
  public OptionCPBlanketCoinsuranceTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CPBlanketCov getCPBlanketCov() {
    return (productmodel.CPBlanketCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.CPBlanketCov getCoverage() {
    return (productmodel.CPBlanketCov)getClause();
  }
  
  
}