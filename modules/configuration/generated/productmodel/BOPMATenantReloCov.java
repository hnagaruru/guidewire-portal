package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPMATenantReloCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPMATenantReloCov extends entity.BOPBuildingCov {
  protected BOPMATenantReloCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPMATenantReloCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPMATenantReloCov");
  }
  
  public BOPMATenantReloCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPMATenantReloCov");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPMATenantReloCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPMATenantReloCov>() {
      public productmodel.BOPMATenantReloCov newEmptyInstance() {
        return new productmodel.BOPMATenantReloCov();
      }
      
      
    });
  }
}