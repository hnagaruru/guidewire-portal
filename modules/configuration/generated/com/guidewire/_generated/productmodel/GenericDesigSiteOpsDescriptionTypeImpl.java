package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExludeDesigSiteOpsSubContractWork.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericDesigSiteOpsDescriptionTypeImpl extends com.guidewire.pc.api.domain.covterm.StringCovTermInternal implements productmodel.GenericDesigSiteOpsDescriptionType {
  public GenericDesigSiteOpsDescriptionTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.ExludeDesigSiteOpsSubContractWork getExclusion() {
    return (productmodel.ExludeDesigSiteOpsSubContractWork)getClause();
  }
  
  @java.lang.Override
  public productmodel.ExludeDesigSiteOpsSubContractWork getExludeDesigSiteOpsSubContractWork() {
    return (productmodel.ExludeDesigSiteOpsSubContractWork)getClause();
  }
  
  
}