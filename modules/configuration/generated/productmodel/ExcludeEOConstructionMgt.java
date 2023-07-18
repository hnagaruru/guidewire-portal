package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeEOConstructionMgt.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeEOConstructionMgt extends entity.GeneralLiabilityExcl {
  protected ExcludeEOConstructionMgt()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeEOConstructionMgt(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeEOConstructionMgt");
  }
  
  public ExcludeEOConstructionMgt(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeEOConstructionMgt");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeEOConstructionMgtInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeEOConstructionMgt>() {
      public productmodel.ExcludeEOConstructionMgt newEmptyInstance() {
        return new productmodel.ExcludeEOConstructionMgt();
      }
      
      
    });
  }
}