package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExludeDesigSiteOpsSubContractWork.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TypekeyDesignateSiteOpsTypeImpl extends com.guidewire.pc.api.domain.covterm.TypekeyCovTermInternal<typekey.DesignateSitesOps> implements productmodel.TypekeyDesignateSiteOpsType {
  public TypekeyDesignateSiteOpsTypeImpl(gw.api.productmodel.TypekeyCovTermPattern pattern, entity.Clause clause)  {
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