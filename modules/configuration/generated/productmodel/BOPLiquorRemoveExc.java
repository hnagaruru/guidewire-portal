package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPLiquorRemoveExc.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPLiquorRemoveExc extends entity.BusinessOwnersCov {
  protected BOPLiquorRemoveExc()  {
    super((java.lang.Void)null);
  }
  
  public BOPLiquorRemoveExc(entity.PolicyPeriod branch)  {
    super(branch, "BOPLiquorRemoveExc");
  }
  
  public BOPLiquorRemoveExc(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPLiquorRemoveExc");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPLiquorRemoveExcInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPLiquorRemoveExc>() {
      public productmodel.BOPLiquorRemoveExc newEmptyInstance() {
        return new productmodel.BOPLiquorRemoveExc();
      }
      
      
    });
  }
}