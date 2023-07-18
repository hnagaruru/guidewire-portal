package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPMALeadPoisonCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPMALeadPoisonCov extends entity.BOPBuildingCov {
  protected BOPMALeadPoisonCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPMALeadPoisonCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPMALeadPoisonCov");
  }
  
  public BOPMALeadPoisonCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPMALeadPoisonCov");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPMALeadPoisonCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPMALeadPoisonCov>() {
      public productmodel.BOPMALeadPoisonCov newEmptyInstance() {
        return new productmodel.BOPMALeadPoisonCov();
      }
      
      
    });
  }
}