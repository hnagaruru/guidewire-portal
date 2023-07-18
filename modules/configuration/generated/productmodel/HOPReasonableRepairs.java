package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPReasonableRepairs.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPReasonableRepairs extends entity.HOPDwellingCov {
  protected HOPReasonableRepairs()  {
    super((java.lang.Void)null);
  }
  
  public HOPReasonableRepairs(entity.PolicyPeriod branch)  {
    super(branch, "zbags5ei5vefn92sf55g2tielv8");
  }
  
  public HOPReasonableRepairs(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zbags5ei5vefn92sf55g2tielv8");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPReasonableRepairsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPReasonableRepairs>() {
      public productmodel.HOPReasonableRepairs newEmptyInstance() {
        return new productmodel.HOPReasonableRepairs();
      }
      
      
    });
  }
}