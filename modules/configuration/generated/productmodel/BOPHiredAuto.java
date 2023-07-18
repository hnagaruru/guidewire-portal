package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPHiredAuto.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPHiredAuto extends entity.BusinessOwnersCov {
  protected BOPHiredAuto()  {
    super((java.lang.Void)null);
  }
  
  public BOPHiredAuto(entity.PolicyPeriod branch)  {
    super(branch, "BOPHiredAuto");
  }
  
  public BOPHiredAuto(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPHiredAuto");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPHiredAutoInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPHiredAuto>() {
      public productmodel.BOPHiredAuto newEmptyInstance() {
        return new productmodel.BOPHiredAuto();
      }
      
      
    });
  }
}